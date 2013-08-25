<?php 
	if ($_POST) {
		$nome 			 = $_POST['nome'];
		$cognome 		 = $_POST['cognome'];
		$nomeagenzia = $_POST['nomeagenzia'];
		$indirizzo 	 = $_POST['indirizzo'];
		$citta 			 = $_POST['citta'];
		$cap 				 = $_POST['cap'];
		$piva 			 = $_POST['piva'];
		$tel 				 = $_POST['tel'];
		$email 			 = $_POST['email'];
		$privacy1 	 = $_POST['privacy1'];
		$privacy2 	 = $_POST['privacy2'];
	}

	$test = true;
	if ($test) {
		$to = 'marco.savoia@gmail.com';
	} else {
		$to = '';
	}

	// subject
	$subject = 'Richiesta da '.trim(strtolower($email));

	// message
	$message = '
			<p>Riepilogo dei dati inseriti dall&#039;utente</p>
			<table>
				<tr>
					<th align="right">Nome:&nbsp;</th>
					<td>'.$nome.'</td>
				</tr>
				<tr>
					<th align="right">Cognome:&nbsp;</th>
					<td>'.$cognome.'</td>
				</tr>
				<tr>
					<th align="right">nomeagenzia:&nbsp;</th>
					<td>'.$nomeagenzia.'</td>
				</tr>
				<tr>
					<th align="right">indirizzo:&nbsp;</th>
					<td>'.$indirizzo.'</td>
				</tr>
				<tr>
					<th align="right">citta</th>
					<td>'.$citta.'</td>
				</tr>
				<tr>
					<th align="right">cap:&nbsp;</th>
					<td>'.$cap.'</td>
				</tr>
				<tr>
					<th align="right">piva:&nbsp;</th>
					<td>'.$piva.'</td>
				</tr>
				<tr>
					<th align="right">tel:&nbsp;</th>
					<td>'.$tel.'</td>
				</tr>
				<tr>
					<th align="right">email:&nbsp;</th>
					<td>'.$email.'</td>
				</tr>
				<tr>
					<th align="right">privacy1:&nbsp;</th>
					<td>'.$privacy1.'</td>
				</tr>
				<tr>
					<th align="right">privacy2:&nbsp;</th>
					<td>'.$privacy2.'</td>
				</tr>
			</table>
	';

	// // To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


	if ($test) {
		$headers .= 'To: marcosavoia <marco.savoia@gmail.com>' . "\r\n";
		$headers .= 'From: marcosavoia <marco.savoia@gmail.com>' . "\r\n";
	} else {
		$headers .= 'To: noleggioauto.it <noleggioauto.it@gmail.com>' . "\r\n";
		$headers .= 'From: Noleggioauto.it <no-reply@noleggioauto.it>' . "\r\n";
	}

	// Mail it
	$result = @mail( $to, $subject, $message, $headers );

	if ($result) {
		echo json_encode(array("success" => true));
	} else {
		echo json_encode(array("success" => false));
	}
?>
