#### Este projeto usa Rewired Para sobreescrever caminhos relativos

` yarn add react-app-rewired -D`

#### Adicione o plugin root para o Babel

`yarn add babel-plugin-root-import -D`

##### Caso haja problema de compatibilidade, use:

`yarn add -D react-app-rewired babel-plugin-root-import customize-cra -D`

E em config-overrides.js:

    const { override, addBabelPlugins } = require('customize-cra')

    module.exports = override(
        ...addBabelPlugins(
            [
                'babel-plugin-root-import',
                {
                    'rootPathPrefix': '~',
                    'rootPathSuffix': 'src'
                }
            ]
        )
    )
