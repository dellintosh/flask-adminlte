==============
Flask-AdminLTE
==============

.. image:: https://travis-ci.org/dellintosh/flask-adminlte.png?branch=master
   :target: https://travis-ci.org/dellintosh/flask-adminlte

.. image:: https://requires.io/github/dellintosh/flask-adminlte/requirements.svg?branch=master
     :target: https://requires.io/github/dellintosh/flask-adminlte/requirements/?branch=master
     :alt: Requirements Status

Flask-AdminLTE packages `AdminLTE
<http://www.almsaeedstudio.com/>`_ into an extension that mostly consists
of a blueprint named 'adminlte'. It can also create links to serve AdminLTE
from a CDN and works with no boilerplate code in your application.

Installation
------------

If you're not already using virtualenv then I strongly recommend you do, it's
just going to make your life a whole lot easier. `The Flask Mega Tutorial
<http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world>`_
has instructions on setting up virtualenv.

Optional but recommended step to use a virtualenv::

    virtualenv myapp
    pip install -r requirements.txt

Running the sample application
------------------------------

There is a sample application in sample_application/ which you can adapt to
your needs. After installing the requirements run it from the project
directory::

    python run_sample_application.py

Usage
-----

Here is an example::

  from flask_adminlte import AdminLTE

  [...]

  AdminLTE(app)

This makes some new templates available, containing blank pages that include all
bootstrap resources, and have predefined blocks where you can put your content.
