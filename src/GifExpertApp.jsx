import { useState } from 'react';
import { AddCategory, GifGrid } from './components/';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['']);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            console.log('Ya existe')
            return;
        }
        setCategories([newCategory, ...categories]);

    }
    console.log(categories);
    return (
        <>
            {/* Título */}
            <h1>GifExpertReact</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />
            {/* Listado */}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
}

