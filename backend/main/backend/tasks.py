from celery import shared_task
from time import sleep
import sys
from io import StringIO
import uuid
import os
import shutil
import subprocess
import contextlib

@shared_task(bind=True)
def testing(self, code:str):
    id = str(uuid.uuid4())
    path = os.path.abspath(id)
    os.mkdir(path)
    filePath = f'{path}/code.py'
    with open(filePath, 'a') as the_file:
        the_file.write(code)
    pathForShell = f'"{path}"'
    command = f'docker run -d -v {pathForShell}:/the/workdir/path backend'
    process = subprocess.check_output(command,shell=True)
    process = process.decode("UTF-8").strip()
    command1 = f'docker ps -a --filter "id={process}"'
    statusStr = ""
    while "Exited" not in statusStr:
        sleep(0.5)
        print("LOOP")
        statusStr = subprocess.check_output(command1,shell=True).decode("UTF-8")
        if "Exited" in statusStr:
            print("YES!")
            command2 = f'docker logs {process}'
            res = subprocess.check_output(command2,shell=True).decode("UTF-8")
            shutil.rmtree(path)
            return res

# @shared_task(bind=True)
# def testing(self, code:str):
#     with stdoutIO() as s:
#         exec(code)

#     return s.getvalue()


# @contextlib.contextmanager
# def stdoutIO(stdout=None):
#     old = sys.stdout
#     if stdout is None:
#         stdout = StringIO()
#     sys.stdout = stdout
#     yield stdout
#     sys.stdout = old