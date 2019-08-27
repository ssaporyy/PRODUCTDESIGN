import React, { Component } from 'react'
import styled from 'styled-components'

const Text1 = styled.p`
    text-align:center;
    font-size:10px;
`
const BG = styled.div`
    background-color: #282f41;
    color:#fb9fa4;
    background-size:cover;
    background-repeat:no-repeat;
    background-attachment: fixed;
    

`
const Header = styled.h3`
    font-size:150px;
    margin-left:100px;
    font-family: 'Open Sans', sans-serif;


`
const Detail = styled.h1`
    font-size:30px;
    font-family: 'Open Sans', sans-serif;


`
const Menu = styled.img`
width:1100px;
height:auto;
`


export default class Home extends Component {
    render() {
        return (
            <BG>
                <div class="container">

                <Text1>Online boutique</Text1>
                <Header>PRODUCT<br />DESIGN</Header>
                <Menu src="https://collagecrafting.com/uploads/home1.jpg" alt="picture"/>
             

                <div class="row">
                        <div class="col col-lg-3">
                        <Detail>OFFICIAL<br/>
                        FINALIST<br/>
                        AT ETSY<br/>
                        DESIGN AWARDS</Detail>
                            
                        </div>
                        <div class="col-lg-5">
                        Collage is a contemporary product design <br/>
                        boutique that creates original and unique objects, <br/>
                        experimenting with different materials, shapes, <br/>
                        textures and colors. We create a wide variety of <br/>
                        hand-crafted objects, from decorative and utility <br/>
                        accessories to jewelry, while constantly evolving <br/>
                        to offer unique products for a design-savvy <br/>
                        clientele.
                        </div>
                        <div class="col col-lg-4">
                        All prices are in Canadian (CAD) currency. To<br/>
                         accommodate our clients outside of Canada, we <br/>
                         offer different shipping costs and methods, at the<br/>
                          best available price, but you need to get in touch <br/>
                          first. Please contact us for international shipping<br/>
                           costs, personalized orders or for a pick up, we'll<br/>
                            be happy to create a specific listing for you.
                            
                        </div>
                    </div>
                    </div>


            </BG>
        )
    }
}
