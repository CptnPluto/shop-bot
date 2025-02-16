import { db } from "@vercel/postgres";
// import bcrypt from 'bcrypt';

// import { users } from '@/lib/placeholder-data';

const client = await db.connect();

// async function seedUsers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL
//     );
//   `;

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       return client.sql`
//         INSERT INTO users (id, name, email, password)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     }),
//   );

//   return insertedUsers;
// }

async function updateUsers() {
	// 1. Alter table to add new columns
	await client.sql`
      ALTER TABLE users 
        ADD COLUMN IF NOT EXISTS onboarded BOOLEAN,
        ADD COLUMN IF NOT EXISTS protein INT,
        ADD COLUMN IF NOT EXISTS carbohydrates INT,
        ADD COLUMN IF NOT EXISTS fat INT;
    `;

	// 2. Create (or replace) the trigger function with proper logical operators
	await client.sql`
      CREATE OR REPLACE FUNCTION update_onboarded_fn() 
      RETURNS trigger AS $$
      BEGIN
        NEW.onboarded :=
          (
            NEW.address IS NOT NULL AND
            NEW.nutritionals IS NOT NULL AND
            NEW.budget IS NOT NULL AND
            NEW.deliveryTime IS NOT NULL AND
            NEW.mealPlan IS NOT NULL AND
            NEW.age IS NOT NULL AND
            NEW.zip IS NOT NULL AND
            NEW.city IS NOT NULL AND
            NEW.state IS NOT NULL AND
            NEW.country IS NOT NULL AND
            NEW.phone IS NOT NULL AND
            NEW.protein IS NOT NULL AND
            NEW.carbohydrates IS NOT NULL AND
            NEW.fat IS NOT NULL
          );
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `;

	// 3. Drop the trigger if it exists
	await client.sql`
      DROP TRIGGER IF EXISTS update_onboarded_trigger ON users;
    `;

	// 4. Create the trigger that uses the above function
	await client.sql`
      CREATE TRIGGER update_onboarded_trigger
      BEFORE INSERT OR UPDATE ON users
      FOR EACH ROW
      EXECUTE FUNCTION update_onboarded_fn();
    `;
}

// async function seedInvoices() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS invoices (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       customer_id UUID NOT NULL,
//       amount INT NOT NULL,
//       status VARCHAR(255) NOT NULL,
//       date DATE NOT NULL
//     );
//   `;

//   const insertedInvoices = await Promise.all(
//     invoices.map(
//       (invoice) => client.sql`
//         INSERT INTO invoices (customer_id, amount, status, date)
//         VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedInvoices;
// }

// async function seedCustomers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS customers (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) NOT NULL,
//       image_url VARCHAR(255) NOT NULL
//     );
//   `;

//   const insertedCustomers = await Promise.all(
//     customers.map(
//       (customer) => client.sql`
//         INSERT INTO customers (id, name, email, image_url)
//         VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedCustomers;
// }

// async function seedRevenue() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS revenue (
//       month VARCHAR(4) NOT NULL UNIQUE,
//       revenue INT NOT NULL
//     );
//   `;

//   const insertedRevenue = await Promise.all(
//     revenue.map(
//       (rev) => client.sql`
//         INSERT INTO revenue (month, revenue)
//         VALUES (${rev.month}, ${rev.revenue})
//         ON CONFLICT (month) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedRevenue;
// }

export async function GET() {
	//   return Response.json({
	//     message:
	//       'Database already seeded. Use this file if you want to try other seeding things.',
	//   });
	try {
		// await client.sql`BEGIN`;
		// await seedUsers();
		await updateUsers();
		//     await seedCustomers();
		//     await seedInvoices();
		//     await seedRevenue();
		// await client.sql`COMMIT`;

		return Response.json({ message: "Database seeded successfully" });
	} catch (error) {
		await client.sql`ROLLBACK`;
		return Response.json({ error }, { status: 500 });
	}
}
