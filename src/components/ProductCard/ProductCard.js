import { baseUrl } from '../../constants/general';
import './ProductCard.css'

const ProductCard = (props) => {
    const { name, price, color, unit, quantity, fruit_image } = props.product;
    const isInStock = quantity > 0;
    
    return (
        <div className="product-card">
            <img 
                src={`${baseUrl}/uploads/${fruit_image}`} 
                alt="" 
                className="product-card-image" 
            />
            <div className="product-card-name">{name}({color})</div>
            <div className="product-card-price">{price} {unit}</div>
            { 
                !isInStock 
                && <div className='product-card-quantity out-of-stock'>Out of stock</div> 
            }
            
        </div>
    )
}

export default ProductCard
