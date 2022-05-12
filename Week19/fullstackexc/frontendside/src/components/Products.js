import { useState, useEffect } from "react";
import { Link} from 'react-router-dom';



const Products = (props) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);    
    const [searchInput, setSearchInput] = useState('');

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');





    useEffect(()=>{

        fetch("/api/products")
        .then(res=>res.json())
        .then(data=>{

            setProducts(data);
            setLoading(false);

    })
    .catch(err => {

        console.log(err)
    })
    }, [])

    const search = () => {

        fetch(`/api/products/search?q=${searchInput}`)
        .then(res=>res.json())
        .then(data=>{

            setProducts(data);
            setLoading(false);

    })
    .catch(err => {

        console.log(err)
    })
    }

    const add = (e) => {

        e.preventDefault();

        fetch(`/api/products`,{

            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name, price})
        })
        .then(res=>res.json())
        .then(data=>{

            setProducts(data);
            setLoading(false);

    })
    .catch(err => {

        console.log(err)
    })


    }

    

    return(

        <>
            <h1>Products</h1>
          
            <div>
                Search: <input type="text" onChange={(e)=>setSearchInput(e.target.value)}/>
                <button onClick={search}>Search</button>
            </div>
            <div>
                <h2>Add Product</h2>
                <form onSubmit={add}>
                    <input type='text' onChange={(e)=>setName(e.target.value)}/>
                    <input type='text' onChange={(e)=>setPrice(e.target.value)}/>
                    <input type='submit' value='Add Product' />
                </form>
            </div>
            {
                products.length === 0 ? <h2>No Products to show</h2> : null
            }
            {
                loading ? <h2>Loading...</h2> : products.map(item=>{

                    return (

                        <div key={item.id}>
                            <h2>Name: {item.name}</h2>
                            <h2>Price: {item.price}</h2>
                            <Link to= {`/${item.id}`}>Show</Link>       
                        </div>
                    )
                })
            }
        </>
    )
}

export default Products;
