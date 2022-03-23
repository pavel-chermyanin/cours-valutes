import React, { Component } from 'react'

export default class CoursService extends Component {

    _apiBase = 'https://www.cbr-xml-daily.ru/daily_json.js';


    getResource = async (url) => {
        // здесь указываем await, значит ждем пока promise зарезолвится
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
        // здесь ждем пока данные перейдут из формата JSON в объект JS
        return await res.json();
    }

    getAllResource = async () => {
        const res = await this.getResource(`${this._apiBase}`);
        return res;
    }

    getItemResorce = async (url) => {
        const res = await this.getResource(url);
        return res
    }



}
