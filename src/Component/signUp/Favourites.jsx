// import React, { useState } from 'react';
// import { Accordion } from 'react-bootstrap';
// import styles from "@/css/signup.module.css";
// import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";

// function Favourites() {
//     const sample = [
//         { id: 1, title: 'Popular Interests', items: [{ name: "gaming" }, { name: "Music" }, { name: "Travel" }, { name: "Painting" }, { name: "Politics" }] },
//         { id: 2, title: 'Dancing', items: [{ name: "Dancing" }, { name: "Social Dancing" }, { name: "Dancing Lesson" }] },
//         { id: 3, title: 'Writing', items: [{ name: "Writing a Book" }, { name: "Creative Writing" }, { name: "Writing Workshop" }] },
//     ]
//     const [addfav, setAddfav] = useState([]);
//     const addfavs = (name) => {
//         const res = [...new Set([...addfav, ...[name]])]
//         setAddfav(res);
//     }

//     const removefavs = (name) => {
//         let checkIndex = addfav.findIndex((val) => val === name);
//         if (checkIndex > -1) {
//             const res = [...new Set([...addfav.slice(0, checkIndex), ...addfav.slice(checkIndex + 1, addfav?.length)])]
//             setAddfav(res);
//         }
//     }

//     return (
//         <div>
//             <input className={`inputs searchinput`} placeholder='Search your fav Interests' type="search" />
//             {addfav.length > 0 &&
//                 <Accordion className='mt-3' defaultActiveKey="20">
//                     <Accordion.Item eventKey="20">
//                         <Accordion.Header>Added</Accordion.Header>
//                         <Accordion.Body className={`py-2`}>
//                             {console.log(addfav, "favouritefavourite")}
//                             <div className={`d-flex  flex-wrap gap-3`}>
//                                 {addfav?.map((e, i) => (
//                                     <button key={i} className={`${styles.addedbtn} px-3 py-2`}>{e} <HiOutlineMinusSm className='ms-1' onClick={() => removefavs(e)} /></button>))}
//                             </div>
//                         </Accordion.Body>
//                     </Accordion.Item>
//                 </Accordion>}

//             <Accordion className='mt-3' defaultActiveKey="0">
//                 {sample.map((e, index) => (
//                     <Accordion.Item eventKey={index.toString()} key={e.id}>
//                         <Accordion.Header>{e.title}</Accordion.Header>
//                         <Accordion.Body className={`py-2`}>
//                             <div className={`d-flex flex-wrap gap-3`}>
//                                 {e.items.map((e, i) =>
//                                     <button key={i} onClick={() => addfavs(e.name)} className={addfav.includes(e.name) ? `${styles.plus} ${styles.plusactivebtn} position-relative px-3 py-2` : `${styles.plus} ${styles.plusnormalbtn} position-relative px-3 py-2`}>{e.name} <HiOutlinePlusSm className='ms-1' /></button>)}
//                             </div>
//                         </Accordion.Body>
//                     </Accordion.Item>))}
//             </Accordion>
//         </div>
//     )
// }

// export default Favourites
import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import styles from "@/css/signup.module.css";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";

function Favourites() {
    const sample = [
        { id: 1, title: 'Popular Interests', items: [{ name: "gaming" }, { name: "Music" }, { name: "Travel" }, { name: "Painting" }, { name: "Politics" }] },
        { id: 2, title: 'Dancing', items: [{ name: "Dancing" }, { name: "Social Dancing" }, { name: "Dancing Lesson" }] },
        { id: 3, title: 'Writing', items: [{ name: "Writing a Book" }, { name: "Creative Writing" }, { name: "Writing Workshop" }] },
    ]
    
    const [addfav, setAddfav] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    
    const addfavs = (name) => {
        const res = [...new Set([...addfav, ...[name]])];
        setAddfav(res);
    }

    const removefavs = (name) => {
        let checkIndex = addfav.findIndex((val) => val === name);
        if (checkIndex > -1) {
            const res = [...new Set([...addfav.slice(0, checkIndex), ...addfav.slice(checkIndex + 1, addfav?.length)])];
            setAddfav(res);
        }
    }

    // Handle search query change
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    }

    // Filter the sample data based on the search query
    const filteredData = sample.map(category => ({
        ...category,
        items: category.items.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.items.length > 0);

    return (
        <div>
            <input
                className={`inputs searchinput`}
                placeholder='Search your fav Interests'
                type="search"
                value={searchQuery}
                onChange={handleSearch}
            />
            {addfav.length > 0 &&
                <Accordion className='mt-3' defaultActiveKey="20">
                    <Accordion.Item eventKey="20">
                        <Accordion.Header>Added</Accordion.Header>
                        <Accordion.Body className={`py-2`}>
                            {console.log(addfav, "favouritefavourite")}
                            <div className={`d-flex flex-wrap gap-3`}>
                                {addfav?.map((e, i) => (
                                    <button key={i} className={`${styles.addedbtn} px-3 py-2`}>
                                        {e} <HiOutlineMinusSm className='ms-1' onClick={() => removefavs(e)} />
                                    </button>
                                ))}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>}

            {filteredData.length > 0 ? (
                <Accordion className='mt-3' defaultActiveKey="0">
                    {filteredData.map((e, index) => (
                        <Accordion.Item eventKey={index.toString()} key={e.id}>
                            <Accordion.Header>{e.title}</Accordion.Header>
                            <Accordion.Body className={`py-2`}>
                                <div className={`d-flex flex-wrap gap-3`}>
                                    {e.items.map((e, i) =>
                                        <button
                                            key={i}
                                            onClick={() => addfavs(e.name)}
                                            className={addfav.includes(e.name)
                                                ? `${styles.plus} ${styles.plusactivebtn} position-relative px-3 py-2`
                                                : `${styles.plus} ${styles.plusnormalbtn} position-relative px-3 py-2`}
                                        >
                                            {e.name} <HiOutlinePlusSm className='ms-1' />
                                        </button>
                                    )}
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            ) : (
                <p className="mt-3 text-center text-white">No Results Found !</p>
            )}
        </div>
    )
}

export default Favourites;
