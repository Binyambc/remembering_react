import { useEffect, useState } from "react";
import type { Product } from "../types/products";
import { getProducts } from "../services/api";
import { Card, TextField } from '@mui/material'; 
import { Grid } from "@mui/material";

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products)
        });
    }, []);

    console.log("Products", products)

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    return (
        <div>
            <h1>Products</h1>
            {/* <input type="search" placeholder="Search for a product" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} ></input> */}
            <TextField 
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            color="secondary"
            value={searchTerm}
            placeholder="Search for a Product"
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ backgroundColor: "white", borderRadius: "10px", padding: "10px" }}
            />
            <Grid container spacing={2} sx={{ p:2 }}>
            {filteredProducts.map((product) => (
                <Card 
                    key={product.id}
                    sx={{
                        display: "felx",
                        flexDirection: "column",
                        alignItems: "center",    
                    }} 
                    >  
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <h3>Description: </h3>
                        <p>{product.description}</p>
                        <h3>Price:</h3>
                        <p>{product.price} €</p>
                        <h3>Category:</h3>
                        <p>{product.category}</p>
                        <h3>Rating:</h3>
                        <p>{product.rating.rate}</p>
                        <h3>Reviews:</h3>
                        <p>{product.rating.count} reviews</p>
                        <h3>Image:</h3>
                        <img
                            style={{ objectFit: "contain", height: "300px" }}
                            src={product.image}
                            alt={product.title}
                        />
                    </div>
                </Card>
            ))}
            </Grid>
        </div>
        );
};

export default Products;