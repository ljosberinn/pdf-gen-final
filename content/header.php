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
          'Neuen Tageszettel erstellen' => [
            'id'          => 'nav-new',
            'class'       => 'navbar-item',
            'data-target' => 'new-pdf',
            'href'        => '',
            'login'       => 'required',
          ],
          'Zwischenspeicher' => [
            'id'          => 'nav-temp',
            'class'       => 'navbar-item',
            'data-target' => 'temp-save',
            'href'        => '',
            'login'       => 'required',
          ],
          'Archiv' => [
            'id'          => 'nav-perm',
            'class'       => 'navbar-item',
            'data-target' => 'perm-save',
            'href'        => '',
            'login'       => 'required',
          ],
          'Urlaub' => [
            'id'          => 'nav-vacation',
            'class'       => 'navbar-item',
            'data-target' => 'vacation',
            'href'        => '',
            'login'       => 'required',
          ],
          'Statistiken' => [
            'id'          => 'nav-stats',
            'class'       => 'navbar-item',
            'data-target' => 'statistics',
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
          'Optionen' => [
            'id'          => '',
            'class'       => 'navbar-item',
            'data-target' => 'options',
            'href'        => '',
            'login'       => 'required',
          ],
          'Login' => [
            'id'          => '',
            'class'       => 'navbar-item',
            'data-target' => '',
            'href'        => '',
            'login'       => '',
          ],
          'Logout' => [
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