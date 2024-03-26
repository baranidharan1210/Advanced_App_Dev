package limited_edition.Golden_Glitz;

import limited_edition.Golden_Glitz.DTO.Request.RegisterRequest;
import limited_edition.Golden_Glitz.DTO.Response.AuthenticationResponse;
import limited_edition.Golden_Glitz.Services.AuthenticationService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GoldenGlitzApplication {

	public static void main(String[] args) {
		SpringApplication.run(GoldenGlitzApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(AuthenticationService authenticationService) {
		return args -> {
			var admin = RegisterRequest.builder()
					.name("Admin")
					.email("admin@gmail.com").password("Admin@123")
					.role("ADMIN")
					.build();

			AuthenticationResponse authenticationResponse = authenticationService.register(admin);
		};
	}
}
