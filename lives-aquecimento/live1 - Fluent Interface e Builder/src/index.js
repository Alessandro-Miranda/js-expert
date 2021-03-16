import data from '../database/data.json';
import FluentSQLBuilder from './fluentSQL.js';

const result = FluentSQLBuilder.for(data)
    // ou inicia com 2020 ou 2019
    .where({ registered: /^(2020|2019)/ })
    // ^ -> Fala que é no inicio
    // $ -> Fala que é o fim
    // | -> significa ou 
    .where({ category: /^(security|developer|quality assurance)$/ })
    // parenteses literais precisam de scape e o grupo fica dentro do outro parenteses
    .where({ phone: /\((852|850|810)\)/ })
    .select(['name', 'company', 'phone', 'category', 'registered'])
    .orderBy('category')
    .limit(2)
    .build();

console.log(result);