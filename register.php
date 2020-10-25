<?php sleep(10); ?>

<h1>Welcome to Mike's!</h1>

<h2><a href="#">Read Reviews</a></h2>
<h2><a href="#">Write Reviews</a></h2>

<ul>
  <li><b>username: </b><?php echo $_REQUEST['username'] ?></li>
  <li><b>password: </b><?php echo $_REQUEST['password'] ?></li>
  <li><b>firstname: </b><?php echo $_REQUEST['firstname'] ?></li>
  <li><b>lastname: </b><?php echo $_REQUEST['lastname'] ?></li>
  <li><b>email: </b><?php echo $_REQUEST['email'] ?></li>
  <li><b>genre: </b><?php echo $_REQUEST['genre'] ?></li>
  <li><b>movie: </b><?php echo $_REQUEST['movie'] ?></li>
  <li><b>description: </b><?php echo $_REQUEST['description'] ?></li>
</ul>

<div id="coverBar">
	<img src="images/coverMatrix.jpg" width="82" height="115" style="left: 0px;" onclick="alert('Our movie reviews are coming soon. Check back often!')"; />
	<img src="images/coverDeadRingers.jpg" width="82" height="115" style="left: 88px;" onclick="alert('Our movie reviews are coming soon. Check back often!')"; />
	<img src="images/coverDrStrangelove.jpg" width="82" height="115" style="left: 176px;" onclick="alert('Our movie reviews are coming soon. Check back often!')"; />
	<img src="images/coverFuturama.jpg" width="82" height="115" style="left: 264px;" onclick="alert('Our movie reviews are coming soon. Check back often!')"; />
	<img src="images/coverHolyGrail.jpg" width="82" height="115" style="left: 356px;" onclick="alert('Our movie reviews are coming soon. Check back often!')"; />
	<img src="images/coverRaisingArizona.jpg" width="82" height="115" style="left: 444px;" onclick="alert('Our movie reviews are coming soon. Check back often!')"; />
	<img src="images/coverRobotChicken.jpg" width="82" height="115" style="left: 532px;" onclick="alert('Our movie reviews are coming soon. Check back often!')"; />
</div>
