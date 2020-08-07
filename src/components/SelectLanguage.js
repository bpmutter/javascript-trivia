import React, {useContext, useState, useEffect} from 'react';
import { Label, Select } from "@rebass/forms";
import { GrLanguage } from "react-icons/gr";
import supportedLangs from "../../content/supportedLanguages.json";
import context from './Context';

const styles = {
  label: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: ".5em",
    fontWeight: "bold",
    fontSize: 25,
  },
};

export default function SelectLanguage(){

    const { language, restartGame } = useContext(context);
    const [activeLanguage, setActiveLanguage] = useState(language);

    const changeLanguage = e => {
        const newLang = e.target.value;
        setActiveLanguage(newLang);
        restartGame(newLang);
    }
    useEffect(()=>{
        setActiveLanguage(language);
    },[language])

    return(<>
        {activeLanguage &&(<>
        <Label htmlFor="lang" sx={styles.label}>
          <GrLanguage />
        </Label>
        <Select id="lang" name="lang" 
            defaultValue={activeLanguage}
            onChange={changeLanguage}
        >
          {Object.keys(supportedLangs).map((key) => {
            return <option key={key} name="lang" value={key}>{supportedLangs[key]}</option>;
          })}
        </Select>
        </>)}
    </>)
}