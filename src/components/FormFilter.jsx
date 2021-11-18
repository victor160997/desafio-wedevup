import React from 'react'
import { FormFilterStyle } from '../style';
import { perDay, perKm } from './Functions';

export default function FormFilter({infos: { day, km, setDay, setKm}}) {
  return (
    <FormFilterStyle>
      <label htmlFor="perDay">
        <span>Days</span>
        <select
          value = { day }
          onChange = { ({ target }) => setDay(target.value) }
        >
          { perDay().map((n) => {
            return (
              <option value = { n }>{ n }</option>
            );
          }) }
        </select>
      </label>

      <label htmlFor="perKm">
        <span>Km's</span>
        <select
          value = { km }
          onChange = { ({ target }) => setKm(target.value) }
        >
          { perKm().map((n) => {
            return (
              <option value = { n }>{ n }</option>
            );
          }) }
        </select>
      </label>
    </FormFilterStyle>
  )
}
