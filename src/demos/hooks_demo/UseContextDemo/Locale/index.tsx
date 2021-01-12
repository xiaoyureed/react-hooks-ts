import React, { createContext, useContext, useState } from "react";

type Locale = { submit: string; cancel: string };
const enStrings: Locale = {
  submit: "Submit",
  cancel: "Cancel",
};
const cnStrings: Locale = {
  submit: "提交",
  cancel: "取消",
};

const defaultLocale = cnStrings;
const LocaleContext = createContext<Locale>(defaultLocale);

const LocaleBtn: React.FC = () => {
  const locale = useContext(LocaleContext);
  return (
    <div>
      <button>{locale.submit}</button> <button>{locale.cancel}</button>
    </div>
  );
};

const LocaleSample: React.FC = () => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  return (
    <>
      <button
        onClick={() => {
          setLocale((prev) => (prev === enStrings ? cnStrings : enStrings));
        }}
      >
        toggle
      </button>
      <LocaleContext.Provider value={locale}>
        <LocaleBtn />
      </LocaleContext.Provider>
      <LocaleBtn />
    </>
  );
};

export default LocaleSample;
