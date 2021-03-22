# Medgrupo - Política de Privacidade 

[![npm version](https://badge.fury.io/js/medgrupo-privacy-policy.svg)](https://badge.fury.io/js/medgrupo-privacy-policy)

Medgrupo - Política de Privacidade => https://site.medgrupo.com.br/politica-de-privacidade

## Script tag

- Adicionar a tag `<script type="module" src="https://unpkg.com/medgrupo-privacy-policy@VERSION/dist/medgrupo-privacy-policy/medgrupo-privacy-policy.esm.js"></script>` entre as tags `head` do html.

## Node Modules
- Run `npm i medgrupo-privacy-policy --save`
- Adicionar a tag `<script type="module" src="node_modules/medgrupo-privacy-policy/medgrupo-privacy-policy.esm.js"></script>` entre as tags `head` do html.

Utilizar a tag `medgrupo-privacy-policy` dentro da tag `body`

```javascript
<body>
<medgrupo-privacy-policy></medgrupo-privacy-policy>
...
...
...
</body>
```

## Propriedades

| Propriedade  | Atributo      | Descrição   | Tipo     | Valor padrão                                                                     |
| ------------ | ------------- | ----------- | -------- | -------------------------------------------------------------------------------- |
| `message`    | `message`     |             | `string` | `'Ao continuar a navegação, você concorda com a nossa política de privacidade.'` |
| `link`       | `link`        |             | `string` | `'https://site.medgrupo.com.br/politica-de-privacidade/'`                        |
| `linkText`   | `link-text`   |             | `string` | `'Saiba mais'`                                                                   |
| `buttonText` | `button-text` |             | `string` | `'Entendi'`                                                                      |


```javascript
<body>
<medgrupo-privacy-policy
  message=""
  link=""
  link-text=""
  button-text=""
></medgrupo-privacy-policy>
...
...
...
</body>
```


----------------------------------------------

*Feito com [StencilJS](https://stenciljs.com/)*