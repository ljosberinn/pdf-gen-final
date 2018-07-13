<nav class="navbar" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item">
        PDF-Generator & Urlaubsverwaltung
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
          '<span class="button"><span class="icon is-small"><i class="far fa-file-pdf"></i></span> <span>Neuen Tageszettel erstellen</span></span>' => [
            'id'          => 'nav-new',
            'class'       => 'navbar-item is-active',
            'data-target' => 'new-pdf',
            'href'        => '',
            'login'       => 'required',
          ],
          '<span class="button"><span class="icon is-small"><i class="fas fa-step-forward"></i></span> <span>Zwischenspeicher</span></span>' => [
            'id'          => 'nav-temp',
            'class'       => 'navbar-item',
            'data-target' => 'temp-save',
            'href'        => '',
            'login'       => 'required',
          ],
          '<span class="button"><span class="icon is-small"><i class="fas fa-archive"></i></span> <span>Archiv</span></span>' => [
            'id'          => 'nav-perm',
            'class'       => 'navbar-item',
            'data-target' => 'perm-save',
            'href'        => '',
            'login'       => 'required',
          ],
          '<span class="button"><span class="icon is-small"><i class="far fa-calendar-alt"></i></span> <span>Kalender</span></span>' => [
            'id'          => 'nav-calendar',
            'class'       => 'navbar-item',
            'data-target' => 'calendar',
            'href'        => '',
            'login'       => 'required',
          ],
          '<span class="button"><span class="icon is-small"><i class="fas fa-search"></i></span> <span>Suche</span></span>' => [
            'id'          => 'nav-search',
            'class'       => 'navbar-item',
            'data-target' => 'search',
            'href'        => '',
            'login'       => 'required',
          ],
          '<span class="button"><span class="icon is-small"><i class="fas fa-sliders-h"></i></span> <span>Optionen</span></span>' => [
            'id'          => 'nav-options',
            'class'       => 'navbar-item',
            'data-target' => 'options',
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
          '<span class="button"><span class="icon is-small"><i class="fas fa-sign-in-alt"></i></span> <span>Login</span></span>' => [
            'id'          => '',
            'class'       => 'navbar-item',
            'data-target' => '',
            'href'        => '',
            'login'       => '',
          ],
          '<span class="button"><span class="icon is-small"><i class="fas fa-sign-out-alt"></i></span> <span>Logout</span></span>' => [
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