import age from "./data"

export default function Cart() {
    let productName = ['Tomatoes', 'Pasta'];
    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem 상품={productName[0]} />
            <CartItem 상품={productName[1]} />
        </div>
    )
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.상품}</p>
            <p>$40</p>
            <p>1개</p>
            <Btn color={'blue'}></Btn>
        </div>
    )
}

function Btn(props){
    return <button style={{ background : props.color }}>버튼임</button>
  }