import CustomHead from "@components/client/header/customHead";
import ShopJozi from "@components/Shop/shop";
import Titles from "@utils/Titles";

const search = ({ query }) => {

    return (
        <>
            <CustomHead title={Titles.titles.search + query.q} />
            <ShopJozi query={query} />
        </>
    )
}
search.getInitialProps = ({ query }) => {
    return { query }
}
export default search