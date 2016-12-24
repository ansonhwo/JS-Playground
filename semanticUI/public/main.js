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
const forms = document.getElementById('forms')
const labels = document.getElementById('labels')

buttons.appendChild(
  CE('h2', {'class': 'ui horizontal divider header'}, [
    CE('i', {'class': 'info circle icon'}, []), 'Buttons'
  ])
)
buttons.appendChild(
  CE('button', {'class': 'ui red button', 'id': 'btn'}, ['Click me'])
)

const btn = document.getElementById('btn')

btn.addEventListener('mouseover', (event) => {
  btn.classList.add('hvr-buzz-out')
})

btn.addEventListener('mouseleave', (event) => {
  btn.classList.remove('hvr-buzz-out')
})

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
  CE('h2', {'class': 'ui horizontal divider header'}, [
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
  CE('div', {'class': 'ui attached stackable menu'}, [
    CE('div', {'class': 'ui container'}, [
      CE('a', {'class': 'item'}, [
        CE('i', {'class': 'home icon'}, []), ' Home'
      ]),
      CE('a', {'class': 'item'}, [
        CE('i', {'class': 'grid layout icon'}, []), ' Browse'
      ]),
      CE('a', {'class': 'item'}, [
        CE('i', {'class': 'mail icon'}, []), ' Messages'
      ]),
      CE('div', {'class': 'ui simple dropdown item'}, [
        'More',
        CE('i', {'class': 'dropdown icon'}, []),
        CE('div', {'class': 'menu'}, [
          CE('a', {'class': 'item'}, [
            CE('i', {'class': 'edit icon'}, []), ' Edit Profile'
          ]),
          CE('a', {'class': 'item'}, [
            CE('i', {'class': 'globe icon'}, []), ' Choose Language'
          ]),
          CE('a', {'class': 'item'}, [
            CE('i', {'class': 'settings icon'}, []), ' Account Settings'
          ])
        ])
      ]),
      CE('div', {'class': 'right item'}, [
        CE('div', {'class': 'ui input'}, [
          CE('input', {'type': 'text', 'placeholder': 'Search...'}, [])
        ])
      ])
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
  CE('h2', {'class': 'ui horizontal divider header'}, [
    CE('i', {'class': 'info circle icon'}, []), 'Headers'
  ])
)
headers.appendChild(
  CE('h2', {'class': 'ui center aligned icon header'}, [
    CE('i', {'class': 'circular users icon'}, []), 'People',
    CE('div', {'class': 'sub header'}, ['Manage your people here.'])
  ])
)
headers.appendChild(
  CE('h2', {'class': 'ui center aligned header'}, [
    CE('img', {'src': 'self.jpeg', 'class': 'ui circular medium image'}, []), 'Background'
  ])
)
headers.appendChild(
  CE('div', {'class': 'ui clearing segment'}, [
    CE('h3', {'class': 'ui right floated header'}, ['Go Forward']),
    CE('h3', {'class': 'ui left floated header'}, ['Go Back'])
  ])
)
headers.appendChild(
  CE('div', {'class': 'ui inverted segment'}, [
    CE('h3', {'class': 'ui right aligned red inverted header'}, ['Right']),
    CE('h3', {'class': 'ui left aligned inverted header'}, ['Left']),
    CE('h3', {'class': 'ui justified blue inverted header'}, ['This should take up the full width']),
    CE('h3', {'class': 'ui center inverted aligned header'}, ['Center'])
  ])
)

forms.appendChild(
  CE('h2', {'class': 'ui horizontal divider header'}, [
    CE('i', {'class': 'info circle icon'}, []), 'Forms'
  ])
)
forms.appendChild(
  CE('div', {'class': 'ui icon input'}, [
    CE('i', {'class': 'search link icon'}, []),
    CE('input', {'type': 'text', 'placeholder': 'Search...'}, [])
  ])
)
forms.appendChild(
  CE('div', {'class': 'ui left icon input loading'}, [
    CE('input', {'type': 'text', 'placeholder': 'Search...'}, []),
    CE('i', {'class': 'search icon'}, [])
  ])
)
forms.appendChild(
  CE('div', {'class': 'ui right labeled input'}, [
    CE('input', {'type': 'text', 'placeholder': 'Find domain'}, []),
    CE('div', {'class': 'ui dropdown label'}, [
      CE('div', {'class': 'text'}, ['.com']),
      CE('i', {'class': 'dropdown icon'}, []),
      CE('div', {'class': 'menu'}, [
        CE('div', {'class': 'item'}, ['.com']),
        CE('div', {'class': 'item'}, ['.net']),
        CE('div', {'class': 'item'}, ['.org'])
      ])
    ])
  ])
)
forms.appendChild(
  CE('div', {'class': 'ui left corner labeled input'}, [
    CE('input', {'type': 'text', 'placeholder': 'Search...'}, []),
    CE('div', {'class': 'ui left corner label'}, [
      CE('i', {'class': 'asterisk icon'}, [])
    ])
  ])
)
forms.appendChild(
  CE('div', {'class': 'ui massive left action input'}, [
    CE('button', {'class': 'ui teal labeled icon button'}, [
      CE('i', {'class': 'cart icon'}, []), 'Checkout'
    ]),
    CE('input', {'type': 'text', 'value': '$52.03'}, [])
  ])
)
forms.appendChild(
  CE('div', {'class': 'ui action input'}, [
    CE('input', {'type': 'text', 'placeholder': 'Search...'}, []),
    CE('select', {'class': 'ui compact selection dropdown'}, [
      CE('option', {'value': 'all'}, ['All']),
      CE('option', {'selected': '', 'value': 'articles'}, ['Articles']),
      CE('option', {'value': 'products'}, ['Products'])
    ]),
    CE('div', {'type': 'submit', 'class': 'ui button'}, ['Search'])
  ])
)
forms.appendChild(
  CE('div', {'class': 'ui transparent left icon input'}, [
    CE('input', {'type:': 'text', 'placeholder': 'Search...'}, []),
    CE('i', {'class': 'search icon'}, [])
  ])
)
labels.appendChild(
  CE('h2', {'class': 'ui horizontal divider header'}, [
    CE('i', {'class': 'info circle icon'}, []), 'Labels'
  ])
)
labels.appendChild(
  CE('div', {'class': 'ui label'}, [
    CE('i', {'class': 'mail icon'}, []), '23'
  ])
)
labels.appendChild(
  CE('div', {'class': 'ui center aligned inverted segment'}, [
    CE('a', {'class': 'ui blue image label'}, [
      CE('img', {'src': 'self.jpeg'}, []), 'Veronika',
      CE('div', {'class': 'detail'}, ['Friend'])
    ]),
    CE('a', {'class': 'ui teal image label'}, [
      CE('img', {'src': 'self.jpeg'}, []), 'Niko',
      CE('div', {'class': 'detail'}, ['Student'])
    ]),
    CE('a', {'class': 'ui yellow image label'}, [
      CE('img', {'src': 'self.jpeg'}, []), 'Helen',
      CE('div', {'class': 'detail'}, ['Co-worker'])
    ]),
    CE('div', {'class': 'ui horizontal inverted divider'}, ['OR']),
    CE('div', {'class': 'ui image label'}, [
      CE('img', {'src': 'self.jpeg'}, []), 'Adrienne',
      CE('i', {'class': 'delete icon'}, [])
    ]),
    CE('div', {'class': 'ui image label'}, [
      CE('img', {'src': 'self.jpeg'}, []), 'Zoe',
      CE('i', {'class': 'delete icon'}, [])
    ]),
    CE('div', {'class': 'ui image label'}, [
      CE('img', {'src': 'self.jpeg'}, []), 'Brian',
      CE('i', {'class': 'delete icon'}, [])
    ])
  ])
)

labels.appendChild(
  CE('form', {'class': 'ui fluid form'}, [
    CE('div', {'class': 'field'}, [
      CE('input', {'type': 'text', 'placeholder': 'First name'}, []),
      CE('div', {'class': 'ui pointing label'}, ['Please enter a value'])
    ]),
    CE('div', {'class': 'ui divider'}, []),
    CE('div', {'class': 'field'}, [
      CE('div', {'class': 'ui pointing below label'}, ['Please enter a value']),
      CE('input', {'type': 'text', 'placeholder': 'Last name'}, [])
    ]),
    CE('div', {'class': 'ui divider'}, []),
    CE('div', {'class': 'inline field'}, [
      CE('input', {'type': 'text', 'placeholder': 'Username'}, []),
      CE('div', {'class': 'ui left pointing red basic label'}, ['That name is taken!'])
    ]),
    CE('div', {'class': 'inline field'}, [
      CE('div', {'class': 'ui right pointing red basic label'}, ['Your password must be 6 characters or more']),
      CE('input', {'type': 'text', 'placeholder': 'Password'}, [])
    ])
  ])
)

labels.appendChild(
  CE('div', {'class': 'ui container'}, [
    CE('a', {'class': 'ui red tag label'}, ['New']),
    CE('a', {'class': 'ui yellow tag label'}, ['Featured']),
    CE('a', {'class': 'ui blue tag label'}, ['Limited'])
  ])
)

labels.appendChild(
  CE('div', {'class': 'ui two column grid'}, [
    CE('div', {'class': 'column'}, [
      CE('div', {'class': 'ui raised segment'}, [
        CE('a', {'class': 'ui red ribbon label'}, ['Overview']),
        CE('span', {}, ['Account Details']),
        CE('p', {}, ['Some text goes here some text goes here Some text goes here some text goes here Some text goes here some text goes here Some text goes here some text goes here Some text goes here some text goes here Some text goes here some text goes here']),
        CE('a', {'class': 'ui blue ribbon label'}, ['Community']),
        CE('span', {}, ['User Reviews']),
        CE('p', {}, ['Some text goes here some text goes here Some text goes here some text goes here Some text goes here some text goes here Some text goes here some text goes here Some text goes here some text goes here Some text goes here some text goes here'])
      ])
    ]),
    CE('div', {'class': 'column'}, [
      CE('div', {'class': 'ui raised segment'}, [
        CE('a', {'class': 'ui orange right ribbon label'}, ['Overview']),
        CE('p', {}, ['Some text goes here some text goes here Some text goes here some text goes here Some text goes here some text goes here Some text goes here some text goes here Some text goes here some text goes here Some text goes here some text goes here']),
        CE('a', {'class': 'ui green right ribbon label'}, ['Community']),
        CE('p', {}, ['Some text goes here some text goes here Some text goes here some text goes here Some text goes here some text goes here Some text goes here some text goes here Some text goes here some text goes here Some text goes here some text goes here'])
      ])
    ])
  ])
)

labels.appendChild(
  CE('div', {'class': 'ui divided selection list'}, [
    CE('a', {'class': 'item'}, [
      CE('div', {'class': 'ui red horizontal label'}, ['Fruit']), 'Kumquats'
    ]),
    CE('a', {'class': 'item'}, [
      CE('div', {'class': 'ui purple horizontal label'}, ['Candy']), 'Ice Cream'
    ]),
    CE('a', {'class': 'item'}, [
      CE('div', {'class': 'ui red horizontal label'}, ['Fruit']), 'Orange'
    ]),
    CE('a', {'class': 'item'}, [
      CE('div', {'class': 'ui horizontal label'}, ['Dog']), 'Daschund'
    ])
  ])
)

labels.appendChild(
  CE('div', {'class': 'ui compact menu'}, [
    CE('a', {'class': 'item'}, [
      CE('i', {'class': 'icon mail'}, []), 'Messages',
      CE('div', {'class': 'floating ui red label'}, ['22'])
    ]),
    CE('a', {'class': 'item'}, [
      CE('i', {'class': 'icon users'}, []), 'Friends',
      CE('div', {'class': 'floating ui teal label'}, ['55'])
    ])
  ])
)
