import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { commerce } from "../../lib/commerce";

const useStyles = makeStyles({
    root: {
        height: 216,
        flexGrow: 1,
        maxWidth: 200,
    },
});

export default function FilterProducts({setProducts, setIsLoading, setMetaData}) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState([]);
    const [selected, setSelected] = useState([]);
    const [categories, setCategories] = useState([])

    const data = ['women', 'women-t-shirts', 'tops', 'saress', 'dress', 'kurta', 'men', 'men-t-shirts', 'jeans', 'pants', 'accessories', 'women', 'bag', 'watch', 'hat', 'shoes', 'men', 'watch', 'hat', 'shoes']

    const fetchCategoryProducts = async () => {
        const response = await commerce.products.list({limit:10, category_slug: categories })
        const {data, meta} = response
        setProducts(data)
        setMetaData(meta)
        setIsLoading(false)
    }
    const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds);
    };

    console.log(categories)

    const handleSelect = (event, nodeIds) => {
        setIsLoading(true)
        setSelected(nodeIds);
        let curr = expanded.map(i => Number(i))
        curr = [...curr, parseInt(nodeIds)].map(i => data[i - 1])
        setCategories(curr)
    };

    useEffect(() => {
        fetchCategoryProducts(categories)
    }, [categories])


    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon/>}
            defaultExpandIcon={<ChevronRightIcon/>}
            defaultExpanded={["1"]}
            expanded={expanded}
            selected={selected}
            onNodeToggle={handleToggle}
            onNodeSelect={handleSelect}
        >
            <TreeItem nodeId="1" label="Women">
                <TreeItem nodeId="2" label="T-Shirts"/>
                <TreeItem nodeId="3" label="Tops"/>
                <TreeItem nodeId="4" label="Saress"/>
                <TreeItem nodeId="5" label="Dress"/>
                <TreeItem nodeId="6" label="Kurta"/>
            </TreeItem>
            <TreeItem nodeId="7" label="Men">
                <TreeItem nodeId="8" label="T-Shirts"/>
                <TreeItem nodeId="9" label="Jeans"/>
                <TreeItem nodeId="10" label="Pants"/>
            </TreeItem>
            <TreeItem nodeId="11" label="Accessories">
                <TreeItem nodeId="12" label="Women">
                    <TreeItem nodeId="13" label="Bag"/>
                    <TreeItem nodeId="14" label="Watch"/>
                    <TreeItem nodeId="15" label="Hat"/>
                    <TreeItem nodeId="16" label="Shoe"/>
                </TreeItem>
                <TreeItem nodeId="17" label="Men">
                    <TreeItem nodeId="18" label="Watch"/>
                    <TreeItem nodeId="19" label="Hat"/>
                    <TreeItem nodeId="20" label="Shoe"/>
                </TreeItem>
            </TreeItem>
        </TreeView>
    );
}
