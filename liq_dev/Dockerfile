FROM node:16

# Install sudo
RUN apt-get update && apt-get install -y sudo

RUN apt-get update && apt-get install -y git

# # Add a non-root user
# RUN useradd -m dockeruser && echo "dockeruser:dockeruser" | chpasswd && adduser dockeruser sudo

# # Allow passwordless sudo for the dockeruser
# RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# # Set the default user to the non-root user
# USER dockeruser