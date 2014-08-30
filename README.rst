==============
Flask-AdminLTE
==============

.. image:: https://travis-ci.org/mbr/flask-bootstrap.png?branch=master
   :target: https://travis-ci.org/mbr/flask-bootstrap

Flask-AdminLTE packages `AdminLTE
<http://www.almsaeedstudio.com/>`_ into an extension that mostly consists
of a blueprint named 'adminlte'. It can also create links to serve AdminLTE
from a CDN and works with no boilerplate code in your application.

Usage
-----

Here is an example::

  from flask_adminlte import AdminLTE

  [...]

  AdminLTE(app)

This makes some new templates available, containing blank pages that include all
bootstrap resources, and have predefined blocks where you can put your content.

Flask-AdminLTE has `proper documentation
<http://pythonhosted.org /Flask-AdminLTE>`_, which you can check for more
details.
