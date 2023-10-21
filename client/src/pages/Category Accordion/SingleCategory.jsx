import React from 'react'
import { MdExpandMore } from 'react-icons/md'
import { tileCards } from '../../data';
import { Link } from 'react-router-dom';

const SingleCategory = ({ id, cat, activeId, toggleCategory }) => {

    const isActive = id === activeId
    const modifiedCategory = cat.includes('_') ? cat.replace(/_/g, ' ') : cat;

    const uniqueValues = (category) => {
        const values = tileCards.map((card) => card[category]);
        return [...new Set(values)];
    };

    return (
        <>
            <article key={modifiedCategory} className="filter-list without-tap-highlight"  onClick={() => toggleCategory(id)}>

                <div className={`${isActive ? 'active' : ''} filter-title-container flex-sb`}>

                    <h3 className={`${isActive ? 'active' : ''} filter-title title-case`}>{modifiedCategory}</h3>
                    {/* Down Arrow Icon */}
                    <button className={`${isActive ? 'toggle':''} toggle-icon`} type='button'>
                        <MdExpandMore />
                    </button>

                </div>
                {isActive &&
                    <div className={`${isActive ? 'active' : ''} toggle-info`}>
                        <ul className="filter-info">
                            {uniqueValues(cat).map((value, index) => (
                                <Link key={index} to={`/category/${cat}/${value}`}><li className="filter-items">{value}</li></Link>
                            ))}
                        </ul>
                    </div>
                }

            </article>
        </>
    )
}

export default SingleCategory