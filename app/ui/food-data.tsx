'use client';
import { useState } from 'react';
import { Button } from './button';
import { fetchFoodData } from '@/api/food/getFoodData';

export default function FoodData() {
    const [data, setData] = useState<any>(null);
    const  handleFetchFood = async () => {
        const foodData = await fetchFoodData();
        setData(foodData);
    }

    return (
        <div>
            <h2>Food Data</h2>
            <Button onClick={handleFetchFood}>Fetch Food Data</Button>
            <ul>
                {data && data.foodData.map((item: any) => (
                    <li key={item.itemName}>
                        <h3>{item.itemName}</h3>
                        <ul>
                            <li>Protein: {item.proteinValue}</li>
                            <li>Carbs: {item.carbohydrateValue}</li>
                            <li>Fat: {item.fatValue}</li>
                            <li>Price: {item.price}</li>
                            <li>Calories: {item.calories}</li>
                            <li>Brand: {item.brand}</li>
                            <li>Category: {item.category}</li>
                            <li>Expiration Date: {item.expirationDate}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}