using API.Models;
using API.Services;
using Microsoft.Net.Http.Headers;

namespace API
{
    public class Startup
    {
        internal static AppSettings AppSettings { get; private set; } = new AppSettings { ApiKey = string.Empty };

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            AppSettings = configuration.Get<AppSettings>() ?? new AppSettings{ ApiKey = string.Empty };
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();

            services.AddSingleton(AppSettings);
            services.AddScoped<INotificationService, NotificationService>();

            services.AddCors(
                options =>
                {
                    options.AddPolicy(name: "_allowEndpointOrigin",
                        policy =>
                        {
                            policy
                            .WithOrigins("http://localhost:4200/")
                            .WithHeaders(HeaderNames.ContentType)
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                        }
                    );
                }
            );
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // Configure the HTTP request pipeline.
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("_allowEndpointOrigin");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers()/*.RequireCors("CorsPolicy")*/;
            });

            app.UseSwagger();
            app.UseSwaggerUI();
        }
    }
}
