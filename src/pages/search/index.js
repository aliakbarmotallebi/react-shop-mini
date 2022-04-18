import ShopJozi from "@components/Shop/shop";

const search = ({query}) => {
    return <ShopJozi query={query} />
}
search.getInitialProps = ({ query }) => {
    return { query }
}
export default search