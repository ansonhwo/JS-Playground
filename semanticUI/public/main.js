const CE = createElement

/******************************/
// Helper Functions
/******************************/
// Create elements with the given attributes & child nodes
function createElement(tagName, attributes, children) {
  let element = document.createElement(tagName);

  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  for (let index = 0; index < children.length; index++) {
    let child = children[index];

    if (child instanceof Element) {
      element.appendChild(child);
    }
    else {
      element.appendChild(document.createTextNode(child));
    }
  }
  return element;
}

/******************************/
// Test Area
/******************************/
const buttons = document.getElementById('buttons')
const containers = document.getElementById('containers')
const headers = document.getElementById('headers')

buttons.appendChild(
  CE('h4', {'class': 'ui horizontal divider header'}, [
    CE('i', {'class': 'info circle icon'}, []), 'Buttons'
  ])
)
buttons.appendChild(
  CE('button', {'class': 'ui red button'}, ['Click me'])
)
buttons.appendChild(
  CE('button', {'class': 'ui blue button'}, ['Other'])
)
buttons.appendChild(
  CE('div', {'class': 'ui labeled button'}, [
    CE('div', {'class': 'ui violet button'}, [
      CE('i', {'class': 'heart icon'}, []), 'Like'
    ]),
    CE('a', {'class': 'ui basic violet left pointing label'}, ['2,000'])
  ])
)
buttons.appendChild(CE('div', {'class': 'ui divider'}, []))

buttons.appendChild(
  CE('div', {'class': 'three ui buttons'}, [
    CE('button', {'class': 'ui button'}, ['One']),
    CE('button', {'class': 'ui button'}, ['Two']),
    CE('button', {'class': 'ui button active'}, ['Three'])
  ])
)
buttons.appendChild(CE('div', {'class': 'ui divider'}, []))

buttons.appendChild(
  CE('div', {'class': 'ui buttons'}, [
    CE('button', {'class': 'ui button'}, ['One']),
    CE('div', {'class': 'or', 'data-text': 'Two'}, []),
    CE('button', {'class': 'ui positive button'}, ['Three'])
  ])
)
buttons.appendChild(
  CE('div', {'class': 'ui buttons'}, [
    CE('button', {'class': 'ui disabled button'}, ['Disabled']),
    CE('button', {'class': 'ui active button'}, ['Active'])
  ])
)
buttons.appendChild(
  CE('button', {'class': 'ui primary loading button'}, ['Loading'])
)
buttons.appendChild(
  CE('button', {'class': 'ui toggle button'}, ['Toggle me'])
)
buttons.appendChild(CE('div', {'class': 'ui divider'}, []))

buttons.appendChild(
  CE('button', {'class': 'ui circular linkedin icon button'}, [
    CE('i', {'class': 'linkedin icon'}, [])
  ])
)
buttons.appendChild(
  CE('button', {'class': 'ui circular github icon button'}, [
    CE('i', {'class': 'github icon'}, [])
  ])
)
buttons.appendChild(
  CE('button', {'class': 'ui circular mail red icon button'}, [
    CE('i', {'class': 'mail icon'}, [])
  ])
)
buttons.appendChild(
  CE('div', {'class': 'ui compact vertical animated button'}, [
    CE('div', {'class': 'visible content'}, ['Animated']),
    CE('div', {'class': 'hidden content'}, [
      CE('i', {'class': 'shop icon'}, [])
    ])
  ])
)
buttons.appendChild(CE('div', {'class': 'ui divider'}, []))

buttons.appendChild(
  CE('button', {'class': 'fluid red ui button'}, ['fits container'])
)

containers.appendChild(
  CE('h4', {'class': 'ui horizontal divider header'}, [
    CE('i', {'class': 'info circle icon'}, []), 'Containers'
  ])
)
containers.appendChild(
  CE('div', {'class': 'ui three column middle aligned very relaxed grid'}, [
    CE('div', {'class': 'column'}, [
      CE('p', {}, ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']),
      CE('p', {}, ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']),
      CE('p', {}, ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']),
      CE('p', {}, ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'])
    ]),
    CE('div', {'class': 'column'}, [
      CE('p', {}, ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet']),
      CE('p', {}, ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet']),
      CE('p', {}, ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet']),
      CE('p', {}, ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet'])
    ]),
    CE('div', {'class': 'column'}, [
      CE('p', {}, ['At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit']),
      CE('p', {}, ['At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit']),
      CE('p', {}, ['At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit']),
      CE('p', {}, ['At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit'])
    ])
  ])
)
containers.appendChild(
  CE('div', {'class': 'ui center aligned inverted segment'}, [
    CE('div', {'class': 'ui left icon action input'}, [
      CE('i', {'class': 'search icon'}, []),
      CE('input', {'type': 'text', 'placeholder': 'Order #'}, []),
      CE('div', {'class': 'ui blue submit button'}, ['Search'])
    ]),
    CE('div', {'class': 'ui horizontal inverted divider'}, ['OR']),
    CE('div', {'class': 'ui teal labeled icon button'}, [
      CE('i', {'class': 'add icon'}, []), 'Create New Order'
    ])
  ])
)
containers.appendChild(
  CE('h4', {'class': 'ui horizontal divider header'}, [
    CE('i', {'class': 'tag icon'}, []), 'Description'
  ])
)
containers.appendChild(
  CE('p', {}, ['Doggie treats are good for all ties of the year. Proven to be eaten by 99.9% of all dogs worldwide.'])
)

headers.appendChild(
  CE('h4', {'class': 'ui horizontal divider header'}, [
    CE('i', {'class': 'info circle icon'}, []), 'Headers'
  ])
)
