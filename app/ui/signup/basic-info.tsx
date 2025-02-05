export default function Info() {
	return (
		<form>
			<label htmlFor="name">Name</label>
			<input name="name" type="Email" />

			<label htmlFor="email">Email</label>
			<input name="email" type="password" />

			<label htmlFor="address">Password</label>
			<input name="address" type="text" />

			<label htmlFor="passwordConf">Password Confirmation</label>
			<input name="passwordConf" type="text" />
		</form>
	);
}
