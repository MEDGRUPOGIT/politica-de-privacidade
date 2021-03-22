# Medgrupo - Política de Privacidade

Podemos usar 3 estratégias para utilizar o componente.

### Script tag

- Adicionar a tag `<script type="module" src="https://unpkg.com/medgrupo-privacy-policy@0.0.1/dist/medgrupo-privacy-policy/medgrupo-privacy-policy.esm.js"></script>` entre as tags `head` do html.

### Node Modules
- Run `npm i medgrupo-privacy-policy --save`
- Adicionar a tag `<script type="module" src="node_modules/medgrupo-privacy-policy/medgrupo-privacy-policy.esm.js"></script>` entre as tags `head` do html.

Agora podemos utilizar a tag `medgrupo-privacy-policy` dentro da tag `body`

```javascript
<body>
<medgrupo-privacy-policy></medgrupo-privacy-policy>
...
...
...
</body>
```
