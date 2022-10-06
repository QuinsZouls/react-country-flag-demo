import * as React from 'react';
import { Label, Input } from 'reactstrap';
import ReactCountryFlag from 'react-country-flag';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Demo Banderas de países usando Emojis y SVG!</h1>
      <ReactCountryFlag countryCode="US" /> US
      <ReactCountryFlag countryCode="US" svg /> US
      <hr />
      <h3>Usando emojis (sin compatibilidad con algunos dispositivos)</h3>
      <Input name="country" type="select" placeholder="Country">
        <option value="US">
          <ReactCountryFlag countryCode="US" /> US
        </option>
      </Input>
      <hr />
      <h3>Usando SVG (Mayor compatibilidad pero mayor cosumo de bandwidth)</h3>
      <Input name="country" type="select" placeholder="Country">
        <option value="US">
          <div style={{ padding: 10 }}>
            <ReactCountryFlag countryCode="US" svg /> US
          </div>
        </option>
        <option value="MX">
          <ReactCountryFlag countryCode="MX" svg /> MX
        </option>
      </Input>
    </div>
  );
}
