import ItemListContainer from "../components/productos/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"


const HomePage = () => {
    return (
        <div>
            <ItemListContainer />
            <ItemDetailContainer
                item={5}
            />
            <ItemDetailContainer
                item={2}
            />

        </div>

    )
}
export default HomePage