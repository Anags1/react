import React from "react";
import DiretaFilho from './DiretaFilho';

export default props => {
    return (
        <div>
            <DiretaFilho texto="Junior" numero={20} nerd={true} />
            <DiretaFilho texto="Gabriel" numero={17} nerd={false} />
        </div>
    )
}