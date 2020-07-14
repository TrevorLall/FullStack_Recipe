import React from 'react'
import Title from './Title'
export default function FilterRecipes() {
    return (
        <>
            <section className="filter-container">
                <Title title="filter"></Title>
                <form className="filter-form">
                    {/** Select Type */}
                    <div className="form-group">
                        <label htmlFor="type">recipe type</label>
                        <select name="type" id="type" value="get" className="form-control">
                            hello
                        </select>
                    </div>
                </form>
            </section>
            {/** end select type */}

        </>
    )
}
