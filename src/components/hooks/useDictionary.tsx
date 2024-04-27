import { dictionary } from "../../config/dictionary";
import { Dictionary } from "../../config/variables"

export const useDictionary = ()  => {
    const dictionaryLanguage = localStorage.getItem(Dictionary);

    if(dictionaryLanguage === 'ru'){
        return dictionary.ru
    } else {
        return dictionary.ru
    }
}