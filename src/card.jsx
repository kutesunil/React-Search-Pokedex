import React from 'react';

const Card = ({data}) => {
    // console.log(data);
    let imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
    return(
        <div className="col-md-3">
            <div className="card text-center" style={{width: "15rem", margin : "10px"}}>
                <div className="card-header">
                    {data.name}
                </div>
                <img className="card-img-top" src=
                {
                    data.id.toString().length === 1
                    ?
                    `${imgUrl}00${data.id}.png`
                    : (
                        data.id.toString().length === 2
                        ?
                        `${imgUrl}0${data.id}.png`
                        :
                        `${imgUrl}${data.id}.png`
                    )
                } alt='testimage'/>
                
                <div className="card-body">
                    <h5 className='card-title'> Type {data.type} </h5>
                    <p className='card-text'> Id #
                    {
                    data.id.toString().length === 1
                    ?
                    `00${data.id}`
                    : (
                        data.id.toString().length === 2
                        ?
                        `0${data.id}`
                        :
                        data.id
                    )
                }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;