import assert, { deepStrictEqual } from 'assert';

export default function mapAPI()
{
    const itemObj = { name: "Alessandro" };
    const itemMap = new Map([
        ['name', 'Alessandro']
    ]);

    itemObj.birthDay = "04/12/1997";

    assert.ok(itemObj.birthDay === '04/12/1997');

    itemMap.set('birthDay', '04/12/1997');

    assert.deepStrictEqual(itemMap.get('birthDay'), '04/12/1997');

    assert.ok(itemObj.hasOwnProperty('birthDay')); // valida se o objeto tem a chave

    assert.ok(itemMap.has('birthDay')); // valida se o item map tem a chave

    delete itemObj.birthDay
    assert.ok(itemObj.hasOwnProperty('birthDay') === false);

    itemMap.delete('birthDay');
    assert.ok(itemMap.has('birthDay') === false);

    assert.deepStrictEqual(Object.keys(itemObj).length, 1); // verifica o tamanho do objeto

    assert.deepStrictEqual(itemMap.size, 1);

    assert.deepStrictEqual(Object.entries(itemObj), [['name', 'Alessandro']]);

    assert.deepStrictEqual([...itemMap], [['name', 'Alessandro']]);

    for(const [key, value] of Object.entries(itemObj))
    {
        assert.deepStrictEqual([key, value], ['name', 'Alessandro']);
    }
    for(const [key, value] of itemMap)
    {
        assert.deepStrictEqual([key, value], ['name', 'Alessandro']);
    }

    // Limpa o objeto
    Object.keys(itemObj).map(key => delete itemObj[key]);
    assert.deepStrictEqual(Object.keys(itemObj), []);

    itemMap.clear();
    assert.deepStrictEqual([...itemMap.keys()], []);
    // fim da limpeza do objeto
}