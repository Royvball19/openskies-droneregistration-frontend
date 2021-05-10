import React from 'react'
import '../style/search.css';
import { GiSaveArrow } from 'react-icons/gi'
import { FiFilter } from "react-icons/fi";
import { RiLineChartFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

function Search({ type }) {
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="box-header">
                <h1>{t("searchHeader")} {type}</h1>
            </div>

            <div className="box-buttons">
                <div className="btn-content"></div>
                <button className="button filter"><div className="btn-content"><p>{t("searchFilter")} </p><FiFilter className="icon filter-icon" /></div></button>
                <button className="button"><div className="btn-content"><p>{t("searchSaveResult")}</p><GiSaveArrow className="icon save-icon" /></div></button>
                <button className="button"><div className="btn-content"><p>{t("searchShowAsChart")}</p><RiLineChartFill className="icon chart-icon" /></div></button>
            </div>

            <div className="box-search">
                <BsSearch className="icon search-icon" />
                <input type="text" placeholder={t("searchPlaceholder") + type} name="search" className="search-field"
                ></input>
            </div>


        </div>
    )
}

export default Search