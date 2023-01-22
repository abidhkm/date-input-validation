import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/min/locales'; // importing all locales

function getBrowserLanguage() {
  if (navigator.languages !== undefined) return navigator.languages[0];
  return navigator.language;
}

export default function App() {
  const [locale, setLocale] = useState(getBrowserLanguage());
  const [date, setDate] = useState('');

  const [, updateState] = React.useState<object>();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const dateFormat = moment.localeData().longDateFormat('L')

  useEffect(() => {
    moment.locale(locale);
    forceUpdate();
  }, [forceUpdate, locale]);

  const validateDate = (date: string) => {
    return moment(
      date,
      dateFormat,
      true
    ).isValid();
  };

  const handleLocaleChange = ({target: {value}}: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(value);
  };

  return (
    <div style={{margin: 20}}>
      <select name="locales" onChange={handleLocaleChange} value={locale}>
        <option value="en-GB">English UK</option>
        <option value="en-US">English US</option>
        <option value="ja">Japanese</option>
        <option value="de">German</option>
      </select>
      <br />
      <br />
      Expected format: {dateFormat}
      <br />
      <br />
      <input value={date} onChange={(e) => setDate(e.target.value)} />
      <br />
      {!!date && `strict eaqual: ${validateDate(date) ? 'valid' : 'not valid'}`}
    </div>
  );
}
