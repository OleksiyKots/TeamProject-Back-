import ssl
from django.core.management.commands.runserver import Command as RunserverCommand

class Command(RunserverCommand):
    def inner_run(self, *args, **options):
        self.stdout.write("Starting server with HTTPS...")
        import socketserver
        from http.server import HTTPServer
        httpd_cls = socketserver.TCPServer

        httpd = httpd_cls((self.addr, int(self.port)), self.get_handler(*args, **options))
        httpd.socket = ssl.wrap_socket(httpd.socket, certfile='cert.pem', keyfile='key.pem', server_side=True)
        self.run(httpd, **options)
        self.stdout.write("Server started with HTTPS on port %s" % self.port)
        self.stdout.write("Press Ctrl+C to stop the server.")