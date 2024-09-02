'use client'

import { useState } from "react"

export default function list() {
    let products = ['Tomatoes', 'Pasta', 'Coconut']

    let [수량, 수량변경] = useState([0, 0, 0]);

    return (
        <div>
            <h2>Products</h2>

            {
                products.map((a, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img"></img>
                            <h4>{a} $40</h4>
                            <span>{수량[i]}</span>
                            <button onClick={() => {
                                let copy = [...수량];
                                copy[i]++;  // 특정 상품의 수량 증가
                                수량변경(copy);
                            }}>+</button>
                            <button onClick={() => {
                                let copy = [...수량];
                                copy[i]--;  // 특정 상품의 수량 감소
                                수량변경(copy);
                            }}>-</button>
                        </div>
                    )
                })
            }


        </div>
    )
}