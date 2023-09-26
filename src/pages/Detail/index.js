import React from "react";
import { useSelector } from "react-redux"
import * as S from './style'

const Detail = () => {
    const item = useSelector((state) => state.hero.item);


    return (
        <S.DetailHero>
            <S.AreaGrid>
                <div className="areaImg">
                    <img src={item.thumbnail.path + '.' + item.thumbnail.extension} />
                </div>
                <div className="description">
                    <p className="title">{item.name}</p>
                    <p>{item.description ? item.description :
                        "Lorem ipsum dolor sitametconsect etur. Ornare leo Lorem ipsum dolor sitametconsect etur. Ornare leotur. Ornare leo Lorem ipsum dolor sitametconsect Lorem ipsum dolor sitametconsect etur. Ornare leo Lorem ipsum dolor sitametconsect etur. Ornare leotur. Ornare leo Lorem ipsum dolor sitametconsect Lorem ipsum dolor sitametconsect etur. Ornare leo Lorem ipsum dolor.sitametconsect etur. Ornare leotur. Ornare leo Lorem ipsum dolor sitametconsect Lorem ipsum dolor sitametconsect etur. Ornare leo Lorem ipsum dolor sitametconsect etur. Ornare leotur. Ornare leo Lorem ipsum dolor sitametconsect Lorem ipsum dolor sitametconsect etur. Ornare leo Lorem ipsum dolor sitametconsect etur. Ornare leotur. Ornare leo Lorem. sitametconsect etur. Ornare leotur. Ornare leo Lorem ipsum dolor sitametconsect Lorem ipsum dolor sitametconsect etur. Ornare leo Lorem ipsum dolor sitametconsect etur. Ornare leotur. Ornare leo Lorem ipsum dolor sitametconsect Lorem ipsum dolor sitametconsect etur. Ornare leo Lorem ipsum dolor sitametconsect etur. Ornare leotur. Ornare leo Lorem."
                    }</p>
                </div>
            </S.AreaGrid>
            <S.AreaBtn>
                <button onClick={()=>window.location.href='/home'}>Voltar</button>
            </S.AreaBtn>
            <h3>Fascículos</h3>
            <S.AreaImgs>
                <div>
                    <img src={item.thumbnail.path + '.' + item.thumbnail.extension} />
                </div>
                <div>
                    <img src={item.thumbnail.path + '.' + item.thumbnail.extension} />
                </div>
                <div>
                    <img src={item.thumbnail.path + '.' + item.thumbnail.extension} />
                </div>
                <div>
                    <img src={item.thumbnail.path + '.' + item.thumbnail.extension} />
                </div>
                <div>
                    <img src={item.thumbnail.path + '.' + item.thumbnail.extension} />
                </div>
            </S.AreaImgs>
        </S.DetailHero>
    )
}

export default Detail