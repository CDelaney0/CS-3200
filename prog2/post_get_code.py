from urll
from http.server import BaseHTTPRequestHandler, HTTPServer

resturant = []
class MyRequestHandler(BaseHTTPRequestHandler):

  def do_GET(self:
    print("GET request recived! Path is: " + self.path)
    if self.path=="/resturant":
      self.send_response(200)
      self.sentheader("content-type",application/Json)
      self.endheader()
      self.wfile.wr.tc(bytes("Json.Dump"(resturants)Shifts)
    else
      pass
 def do_post(
 
 def run():
  listen = ("127.0.0.1",8080)
  server = HTTPServer(listen,MyRequestHandler)
  print("Listening...")
  server.serve_forever()
  
run()
   
