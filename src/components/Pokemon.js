const Pokemon = (props) => {

    return (
        <div>
            <h1>{props.pokemon ? props.pokemon.name : 'no pokemon'}</h1>
            <img src={props.pokemon ? props.pokemon.sprites["front_default"] : ''} alt="Pokemon Character" />
            <p>Pokemon Index: {props.pokemon ? props.pokemon.id : 'no id'} </p>
            <p>Type: {props.pokemon ? props.pokemon.types[0].type.name : 'none'}</p>
        </div>
    )
}
export default Pokemon
