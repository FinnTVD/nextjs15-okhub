"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var traitInputAttr = {
  placeholder: 'ex: Insira o texto'
};
var _default = exports.default = {
  assetManager: {
    addButton: 'Adicionar imagem',
    inputPlh: 'http://caminho/para/a/imagem.jpg',
    modalTitle: 'Selecionar imagem',
    uploadTitle: 'Solte os arquivos aqui ou clique para enviar'
  },
  // Here just as a reference, GrapesJS core doesn't contain any block,
  // so this should be omitted from other local files
  blockManager: {
    labels: {
      // 'block-id': 'Block Label',
    },
    categories: {
      // 'category-id': 'Category Label',
    }
  },
  domComponents: {
    names: {
      '': 'Box',
      wrapper: 'Corpo',
      text: 'Texto',
      comment: 'Comentário',
      image: 'Imagem',
      video: 'Vídeo',
      label: 'Label',
      link: 'Link',
      map: 'Mapa',
      tfoot: 'Rodapé da tabela',
      tbody: 'Corpo da tabela',
      thead: 'Cabeçalho da tabela',
      table: 'Tabela',
      row: 'Linha da tabela',
      cell: 'Célula da tabela',
      section: 'Seção',
      body: 'Corpo'
    }
  },
  deviceManager: {
    device: 'Dispositivo',
    devices: {
      desktop: 'Desktop',
      tablet: 'Tablet',
      mobileLandscape: 'Celular, modo panorâmico',
      mobilePortrait: 'Celular, modo retrato'
    }
  },
  panels: {
    buttons: {
      titles: {
        preview: 'Pré-visualização',
        fullscreen: 'Tela cheia',
        'sw-visibility': 'Ver componentes',
        'export-template': 'Ver código',
        'open-sm': 'Abrir gerenciador de estilos',
        'open-tm': 'Configurações',
        'open-layers': 'Abrir gerenciador de camadas',
        'open-blocks': 'Abrir blocos'
      }
    }
  },
  selectorManager: {
    label: 'Classes',
    selected: 'Selecionado',
    emptyState: '- Estado -',
    states: {
      hover: 'Hover',
      active: 'Click',
      'nth-of-type(2n)': 'Even/Odd'
    }
  },
  styleManager: {
    empty: 'Selecione um elemento para usar o gerenciador de estilos',
    layer: 'Camada',
    fileButton: 'Imagens',
    sectors: {
      general: 'Geral',
      layout: 'Disposição',
      typography: 'Tipografia',
      decorations: 'Decorações',
      extra: 'Extra',
      flex: 'Flex',
      dimension: 'Dimensão'
    },
    // The core library generates the name by their `property` name
    properties: {
      float: 'Float',
      display: 'Exibição',
      position: 'Posição',
      top: 'Topo',
      right: 'Direita',
      left: 'Esquerda',
      bottom: 'Inferior',
      width: 'Largura',
      height: 'Altura',
      'max-width': 'Largura Max.',
      'max-height': 'Altura Max.',
      margin: 'Margem',
      'margin-top-sub': 'Superior',
      'margin-right-sub': 'Direita',
      'margin-left-sub': 'Esquerda',
      'margin-bottom-sub': 'Inferior',
      padding: 'Padding',
      'padding-top-sub': 'Superior',
      'padding-left-sub': 'Esquerda',
      'padding-right-sub': 'Direita',
      'padding-bottom-sub': 'Inferior',
      'font-family': 'Tipo de letra',
      'font-size': 'Tamanho da fonte',
      'font-weight': 'Espessura da fonte',
      'letter-spacing': 'Espaço entre letras',
      color: 'Cor',
      'line-height': 'Altura da linha',
      'text-align': 'Alinhamento do texto',
      'text-shadow': 'Sombra do texto',
      'text-shadow-h': 'Sombra do texto: horizontal',
      'text-shadow-v': 'Sombra do texto: vertical',
      'text-shadow-blur': 'Desfoque da sombra do texto',
      'text-shadow-color': 'Cor da sombra da fonte',
      'border-top-left': 'Borda superior a esquerda',
      'border-top-right': 'Borda superior a direita',
      'border-bottom-left': 'Borda inferior a esquerda',
      'border-bottom-right': 'Borda inferior a direita',
      'border-top-left-radius-sub': 'Superior esquerda',
      'border-top-right-radius-sub': 'Superior direita',
      'border-bottom-right-radius-sub': 'Inferior direita',
      'border-bottom-left-radius-sub': 'Inferior esquerda',
      'border-radius': 'Raio da borda',
      border: 'Borda',
      'border-width-sub': 'Largura',
      'border-style-sub': 'Estilo',
      'border-color-sub': 'Cor',
      'box-shadow': 'Sombra da box',
      'box-shadow-h': 'Sombra da box: horizontal',
      'box-shadow-v': 'Sombra da box: vertical',
      'box-shadow-blur': 'Desfoque da sombra da box',
      'box-shadow-spread': 'Extensão da sombra da box',
      'box-shadow-color': 'Cor da sombra da box',
      'box-shadow-type': 'Tipo de sombra da box',
      background: 'Fundo',
      'background-color': 'Cor de fundo',
      'background-image': 'Imagem de fundo',
      'background-repeat': 'Repetir fundo',
      'background-position': 'Posição do fundo',
      'background-attachment': 'Plugin de fundo',
      'background-size': 'Tamanho do fundo',
      opacity: 'Opacidade',
      transition: 'Transição',
      'transition-property': 'Tipo de transição',
      'transition-duration': 'Tempo de transição',
      'transition-timing-function': 'Função do tempo da transição',
      perspective: 'Perspectiva',
      transform: 'Transformação',
      'transform-rotate-x': 'Rotacionar horizontalmente',
      'transform-rotate-y': 'Rotacionar verticalmente',
      'transform-rotate-z': 'Rotacionar profundidade',
      'transform-scale-x': 'Escalar horizontalmente',
      'transform-scale-y': 'Escalar verticalmente',
      'transform-scale-z': 'Escalar profundidade',
      'flex-direction': 'Direção Flex',
      'flex-wrap': 'Flex wrap',
      'justify-content': 'Ajustar conteúdo',
      'align-items': 'Alinhar elementos',
      'align-content': 'Alinhar conteúdo',
      order: 'Ordem',
      'flex-basis': 'Base Flex',
      'flex-grow': 'Crescimento Flex',
      'flex-shrink': 'Contração Flex',
      'align-self': 'Alinhar-se'
    }
  },
  traitManager: {
    empty: 'Selecione um elemento para usar o gerenciador de características',
    label: 'Configurações do componente',
    traits: {
      // The core library generates the name by their `name` property
      labels: {
        // id: 'Id',
        // alt: 'Alt',
        title: 'Título',
        href: 'Link',
        target: 'Abrir em'
      },
      // In a simple trait, like text input, these are used on input attributes
      attributes: {
        id: traitInputAttr,
        alt: traitInputAttr,
        title: traitInputAttr,
        href: {
          placeholder: 'ex: https://google.com'
        }
      },
      // In a trait like select, these are used to translate option names
      options: {
        target: {
          false: 'Esta janela',
          _blank: 'Nova janela'
        }
      }
    }
  }
};