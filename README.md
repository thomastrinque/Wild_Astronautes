HOW TO USE GIT
=============
```
- Workflow
    - Two main branches
        - master
        - dev
    - Each developer work on a feature branch
    - Once a feature branch is OK merge it into the dev branch
    - Once the dev branch is OK they merge it into the master branch

- Create a repo or clone it
    - Create a repo
        $ git init myProject
        $ cd myProject
        $ touch README.md
        $ git add README.md
        $ git commit -m "First commit"
        $ git remote add origin git@github.com...
        $ git push -u origin master
    - Clone a repo
        $ git clone git@github.com:Paviluf/try.git

- Create a dev branch and switch to it
    $ git checkout -b dev
    $ git push --set-upstream origin dev

- Make a new feature (One branch by feature)
    $ git checkout dev
    $ git pull
    $ git checkout -b myFeature dev
        $ git add .
        $ git commit -m "my comment"
        - repeat as needed
    $ git checkout dev
    $ git pull
    $ git checkout myFeature
    $ git merge dev
        - handle conflicts
    $ git checkout dev
    $ git merge myFeature 
    $ git pull
        - handle possible new conflicts
    $ git push -u origin dev
    
- Delete a local branch
    $ git branch -d myFeature
    
- Merge dev in master
    $ git checkout dev
    $ git pull
    $ git checkout master
    $ git pull
    $ git checkout dev
    $ git merge master
        - handle possible conficts
    $ git checkout master
    $ git merge dev
    $ git push -u origin master
```
