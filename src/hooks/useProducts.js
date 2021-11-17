import {useEffect,useState} from 'react';

const useProducts = ()=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] =useState(true);


    useEffect(() => {
        fetch('https://shrouded-temple-49103.herokuapp.com/products')
       .then(res => res.json())
       .then(result => {
         setProducts(result.products)
         setLoading(false);
       });
     }, [products,loading]);

    return [products, loading ];

}

export default useProducts;