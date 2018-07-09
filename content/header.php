<nav class="navbar" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        PDFGenerator 3.0 - Final
      </a>
      <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" id="navMenu">

      <div class="navbar-start">

        <?php

        $navBarStartItems = [
          '<button type="button" class="button"><span class="icon is-small"><i class="far fa-file-pdf"></i></span> <span>Neuen Tageszettel erstellen</span></button>' => [
            'id'          => 'nav-new',
            'class'       => 'navbar-item',
            'data-target' => 'new-pdf',
            'href'        => '',
            'login'       => 'required',
          ],
          '<button type="button" class="button"><span class="icon is-small"><i class="fas fa-step-forward"></i></span> <span>Zwischenspeicher</span></button>' => [
            'id'          => 'nav-temp',
            'class'       => 'navbar-item',
            'data-target' => 'temp-save',
            'href'        => '',
            'login'       => 'required',
          ],
          '<button type="button" class="button"><span class="icon is-small"><i class="fas fa-archive"></i></span> <span>Archiv</span></button>' => [
            'id'          => 'nav-perm',
            'class'       => 'navbar-item',
            'data-target' => 'perm-save',
            'href'        => '',
            'login'       => 'required',
          ],
          '<button type="button" class="button"><span class="icon is-small"><i class="far fa-calendar-alt"></i></span> <span>Kalender</span></button>' => [
            'id'          => 'nav-calendar',
            'class'       => 'navbar-item',
            'data-target' => 'calendar',
            'href'        => '',
            'login'       => 'required',
          ],
        ];

        appendNavItems($navBarStartItems);

        ?>

      </div>
      <div class="navbar-end">

        <?php

        $navBarEndItems = [
          '<button type="button" class="button"><span class="icon is-small"><i class="fas fa-search"></i></span> <span>Suche</span></button>' => [
            'id'          => '',
            'class'       => 'navbar-item',
            'data-target' => 'search',
            'href'        => '',
            'login'       => 'required',
          ],
          '<button type="button" class="button"><span class="icon is-small"><i class="fas fa-sliders-h"></i></span> <span>Optionen</span></button>' => [
            'id'          => '',
            'class'       => 'navbar-item',
            'data-target' => 'options',
            'href'        => '',
            'login'       => 'required',
          ],
          '<button type="button" class="button"><span class="icon is-small"><i class="fas fa-sign-in-alt"></i></span> <span>Login</span></button>' => [
            'id'          => '',
            'class'       => 'navbar-item',
            'data-target' => '',
            'href'        => '',
            'login'       => '',
          ],
          '<button type="button" class="button"><span class="icon is-small"><i class="fas fa-sign-out-alt"></i></span> <span>Logout</span></button>' => [
            'id'          => '',
            'class'       => 'navbar-item',
            'data-target' => '',
            'href'        => '?logout',
            'login'       => 'required',
          ]
        ];

        appendNavItems($navBarEndItems);

        ?>

      </div>
    </div>
  </div>
</nav>