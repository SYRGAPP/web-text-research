FROM oktaadmin/awscli
#You can start with any base Docker Image that works for you

RUN echo "#!/bin/bash\n" > /startscript.sh
RUN echo "git clone https://github.com/SYRGAPP/web-text-research --branch newExperiment \n" >> /startscript.sh
RUN echo "cd web-text-research\n" >> /startscript.sh
RUN echo "make dockertest\n" >> /startscript.sh

RUN chmod +x /startscript.sh

CMD /startscript.sh
