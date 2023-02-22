import "./ItemListContainer.scss"

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <p className="greeting bg-black text-white">{greeting}</p>
        </div>
    );
}

export default ItemListContainer;
